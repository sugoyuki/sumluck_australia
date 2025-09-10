export default function Hero() {
  return (
    <section style={{
      background: '#f9fafb',
      minHeight: '550px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        padding: '0 60px',
        display: 'flex',
        alignItems: 'center',
        gap: '60px'
      }}>
        <div style={{
          flex: '0 0 350px',
          height: '400px',
          background: '#f9fafb',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: '16px',
          border: '2px dashed #d1d5db'
        }}>
          人物写真スペース
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{
            color: '#10b981',
            fontSize: '22px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            ＼ オーストラリアにいらっしゃる日本人の皆様へ／<br />
            PC・スマホで完結する病院受診を提供します
          </div>
          
          <h1 style={{
            fontSize: '72px',
            color: '#10b981',
            marginBottom: '50px',
            fontWeight: 'bold',
            lineHeight: 1.1,
            textAlign: 'center'
          }}>
            オンライン診療
          </h1>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            marginBottom: '45px'
          }}>
            <div style={{
              background: 'white',
              border: '3px solid #10b981',
              borderRadius: '16px',
              padding: '20px 35px',
              minWidth: '240px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '85px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#10b981',
                borderRadius: '50%',
                position: 'absolute',
                top: '-32px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '30px'
              }}>
                📱
              </div>
              <div style={{
                fontSize: '18px',
                color: '#333',
                fontWeight: 'bold',
                lineHeight: 1.4,
                marginTop: '20px',
                textAlign: 'center'
              }}>
                安心の日本語通訳
              </div>
            </div>
            
            <div style={{
              background: 'white',
              border: '3px solid #10b981',
              borderRadius: '16px',
              padding: '20px 35px',
              minWidth: '240px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '85px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#10b981',
                borderRadius: '50%',
                position: 'absolute',
                top: '-32px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '30px'
              }}>
                🚚
              </div>
              <div style={{
                fontSize: '18px',
                color: '#333',
                fontWeight: 'bold',
                lineHeight: 1.4,
                marginTop: '20px',
                textAlign: 'center'
              }}>
                すぐに予約可能
              </div>
            </div>
            
            <div style={{
              background: 'white',
              border: '3px solid #10b981',
              borderRadius: '16px',
              padding: '20px 35px',
              minWidth: '240px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '85px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#10b981',
                borderRadius: '50%',
                position: 'absolute',
                top: '-32px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '30px'
              }}>
                ⏰
              </div>
              <div style={{
                fontSize: '18px',
                color: '#333',
                fontWeight: 'bold',
                lineHeight: 1.4,
                marginTop: '20px',
                textAlign: 'center'
              }}>
                海外旅行保険対応
              </div>
            </div>
          </div>
          
          <div style={{
            color: '#10b981',
            fontSize: '22px',
            textAlign: 'center',
            fontWeight: 500,
            marginTop: '20px'
          }}>
            ～ 受診からお薬の処方箋のお渡しまで～
          </div>
        </div>
      </div>
    </section>
  );
}