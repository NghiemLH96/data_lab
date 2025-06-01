import { useState } from 'react'
import { BarChartOutlined, FileTextOutlined, HistoryOutlined, LineChartOutlined, LoginOutlined, PaperClipOutlined, MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import './sideBar.scss'

const sidebarItems = [
  { icon: <BarChartOutlined />, title: 'Thống kê' },
  { icon: <PaperClipOutlined />, title: 'Quản lý đề thi' },
  { icon: <FileTextOutlined />, title: 'Tài liệu tham khảo' },
  { icon: <HistoryOutlined />, title: 'Lịch sử làm bài' },
  { icon: <LineChartOutlined />, title: 'Kết quả tổng quát' },
  { icon: <LoginOutlined />, title: 'Đăng xuất' },
]

export default function SideBar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <aside className={`sidebar${expanded ? ' expanded' : ''}`}>
        <ul className='sidebar-list'>
          <li
            className='sidebar-list-item sidebar-list-extend'
            onClick={() => setExpanded(!expanded)}
            style={{ cursor: 'pointer' }}
          >
            <span className='sidebar-list-icon'>
              {expanded ? <ArrowLeftOutlined /> : <MenuOutlined />}
            </span>
            <span className='sidebar-list-title'>
              {expanded ? 'Thu gọn' : ''}
            </span>
          </li>
          {sidebarItems.map((item, idx) => (
            <li className='sidebar-list-item' key={idx}>
              <span className='sidebar-list-icon'>{item.icon}</span>
              <span className='sidebar-list-title'>{item.title}</span>
            </li>
          ))}
        </ul>
      </aside>
      {expanded && (
        <div
          className="sidebar-backdrop"
          onClick={() => setExpanded(false)}
        />
      )}
    </>
  )
}
