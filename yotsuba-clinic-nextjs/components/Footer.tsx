import React from 'react';

const Footer: React.FC = () => {
  const scheduleData = [
    { time: '09:00〜13:00', mon: '●', tue: '●', wed: '●', thu: '-', fri: '●', sat: '●', sun: '-' },
    { time: '14:00〜18:00', mon: '●', tue: '●', wed: '●', thu: '-', fri: '●', sat: '●', sun: '-' }
  ];

  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '60px 0 20px',
      marginTop: 0
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 120px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        marginBottom: '40px'
      }}>
        <div>
          <h3 style={{
            fontSize: '18px',
            marginBottom: '20px',
            color: '#10b981'
          }}>
            よつばオンラインメディカル
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#95a5a6',
            marginTop: '20px',
            lineHeight: '1.8'
          }}>
            📍 1F, Emaar The Palm Spring Plaza, Unit No. 007,<br/>
            Sector 53, Gurugram, Haryana 122002
          </p>
          <p style={{
            fontSize: '14px',
            color: '#95a5a6',
            marginTop: '15px'
          }}>
            📞 電話: +91-99102-29899<br/>
            (Whatsapp対応可)
          </p>
          <div style={{ marginTop: '20px' }}>
            <a 
              href="#" 
              style={{
                display: 'inline-block',
                background: '#10b981',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              💬 LINE予約
            </a>
          </div>
        </div>

        <div>
          <h3 style={{
            fontSize: '18px',
            marginBottom: '20px',
            color: '#10b981'
          }}>
            診療時間
          </h3>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px'
          }}>
            <table style={{
              width: '100%',
              color: '#333',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                  <th style={{
                    padding: '8px',
                    textAlign: 'left',
                    fontWeight: 'normal',
                    color: '#666'
                  }}>
                    診療時間
                  </th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>月</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>火</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>水</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>木</th>
                  <th style={{ padding: '8px', textAlign: 'center' }}>金</th>
                  <th style={{ 
                    padding: '8px', 
                    textAlign: 'center', 
                    color: '#10b981' 
                  }}>土</th>
                  <th style={{ 
                    padding: '8px', 
                    textAlign: 'center', 
                    color: '#ff4444' 
                  }}>日</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index}>
                    <td style={{ 
                      padding: '8px', 
                      color: '#666' 
                    }}>
                      {row.time}
                    </td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.mon}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.tue}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.wed}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.thu}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.fri}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.sat}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.sun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{
              fontSize: '12px',
              color: '#999',
              marginTop: '15px'
            }}>
              ※午前の部12:30まで、午後の部17:30までに受付を済ませてください。<br/>
              休診日：毎週木・日曜日・祝日
            </p>
          </div>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid #34495e',
        fontSize: '14px',
        color: '#95a5a6'
      }}>
        <p>©︎2025 インドよつばオンラインメディカル All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;