import { useState } from 'react'
import { BarChartOutlined, FileTextOutlined, HistoryOutlined, LineChartOutlined, LoginOutlined, PaperClipOutlined, MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import './sideBar.scss'
import { Link } from 'react-router-dom'

const sidebarItems = [
  { icon: <BarChartOutlined />, title: 'Thống kê' , page: '/overview'},
  { icon: <PaperClipOutlined />, title: 'Quản lý đề thi', page: '/exam-manager' },
  { icon: <PaperClipOutlined />, title: 'Quản lý câu hỏi', page: '/questions-manager' },
  { icon: <PaperClipOutlined />, title: 'Quản lý ma trận', page: '/matrix-manager' },
  { icon: <FileTextOutlined />, title: 'Tài liệu tham khảo', page: '/references' },
  { icon: <HistoryOutlined />, title: 'Lịch sử làm bài', page: '/history' },
  { icon: <LineChartOutlined />, title: 'Kết quả tổng quát', page: '/overall-result' },
  { icon: <LoginOutlined />, title: 'Đăng xuất', page: '/' },
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
            <Link to={item.page} className='sidebar-list-item' key={idx}>
              <span className='sidebar-list-icon'>{item.icon}</span>
              <span className='sidebar-list-title'>{item.title}</span>
            </Link>
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
