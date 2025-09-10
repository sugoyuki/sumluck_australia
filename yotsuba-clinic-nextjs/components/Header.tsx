export default function Header() {
  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #e5e5e5',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '42px',
            height: '42px',
            background: '#10b981',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            🍀
          </div>
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            よつばオンラインメディカル
          </div>
        </a>
        
        <nav>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '30px',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#" style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '14px',
              padding: '10px 12px',
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>診療内容</a></li>
            <li><a href="#" style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '14px',
              padding: '10px 12px',
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>オンライン診療</a></li>
            <li><a href="#" style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '14px',
              padding: '10px 12px',
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>クリニック一覧</a></li>
            <li><a href="#" style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '14px',
              padding: '10px 12px',
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>当院について</a></li>
            <li><a href="#" style={{
              textDecoration: 'none',
              color: '#333',
              fontSize: '14px',
              padding: '10px 12px',
              transition: 'opacity 0.3s'
            }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
               onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>コラム</a></li>
          </ul>
        </nav>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <a 
            href="#" 
            style={{
              background: '#10b981',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 'bold',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
          >
            <span>📱</span>
            <span>診療予約</span>
          </a>
        </div>
      </div>
    </header>
  );
}