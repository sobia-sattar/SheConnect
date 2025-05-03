import React from 'react';

function Emergency() {
  const contacts = [
    { name: "National Women’s Helpline", number: "1091" },
    { name: "Emergency Services", number: "112" },
    { name: "Nearest Police Station", number: "" },
    { name: "Local Support Centers", number: "" },
  ];

  return (
    <div className="page" data-aos="fade-up" style={{ padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: '#444', textAlign: 'center' }}>
      <h1 style={{ color: 'hotpink', marginBottom: '20px', fontSize: '2.5rem' }}>Emergency Help 🚨</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto', marginBottom: '30px' }}>
        In times of crisis, every second matters. 
        Quickly access important emergency contacts and nearby support centers for immediate help.
      </p>

      <ul style={{ listStyleType: 'none', padding: 0, maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
        {contacts.map((contact, index) => (
          <li 
            key={index} 
            style={{ 
              marginBottom: '30px', 
              padding: '20px', 
              background: '#ffe6f0', 
              borderRadius: '12px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            <strong style={{ fontSize: '1.2rem' }}>{contact.name}</strong>
            <br />
            {contact.number ? (
              <a
                href={`tel:${contact.number}`}
                style={{
                  display: 'inline-block',
                  marginTop: '12px',
                  padding: '10px 24px',
                  backgroundColor: 'hotpink',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'background 0.3s',
                }}
              >
                Call Now 📞
              </a>
            ) : (
              <span style={{ display: 'inline-block', marginTop: '12px', fontStyle: 'italic', color: 'gray' }}>
                Location-based service
              </span>
            )}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '40px', fontSize: '1rem', color: '#666' }}>
        Stay calm and remember — help is just one tap away.
        <br />
        (Turn on location access for nearest support)
      </p>
    </div>
  );
}

export default Emergency;
