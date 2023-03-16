/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize : {
        'Small/Label/Large-Strong' : ['16px',{
          fontWeight: 700,
          lineHeight: '20px',
          fontStyle:'normal',
          letterSpacing: '-0.01em',
        }],
        'Small/Label/Small' : ['16px',{
          fontWeight: 500,
          lineHeight: '20px',
          fontStyle:'normal',
          letterSpacing: '-0.01em',
        }],
        'Small/Title/Medium' : ['24px',{
          fontWeight: 800,
          lineHeight: '32px',
          fontStyle:'normal',
          letterSpacing: '-0.015em',
        }
        ],
        'Medium+/Title/Small':['24px',{
          fontWeight: 800,
          lineHeight: '28px',
          fontStyle:'normal',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/Large':['40px',{
          fontWeight: 800,
          lineHeight: '48px',
          fontStyle:'normal',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/xSmall':['18px',{
          fontWeight: 800,
          lineHeight: '24px',
          fontStyle:'normal',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Label/Small-Strong':['14px',{
          fontWeight: 700,
          lineHeight: '16px',
          fontStyle:'normal',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Large-Strong':['18px',{
          fontWeight: 700,
          lineHeight: '24px',
          fontStyle:'normal',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Paragraph/Small-Strong':['14px',{
          fontWeight: 700,
          lineHeight: '20px',
          fontStyle:'normal',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Large':['18px',{
          fontWeight: 400,
          lineHeight: '28px',
          fontStyle:'normal',
          letterSpacing: '-0.015em',
        }]
      },
      colors : {
        'Foundation/primary/primary-1' : '#F0EDEC',
        'Foundation/primary/primary-2' : '#DCD5D2',
        'Foundation/primary/primary-4' : '#A29089',
        'Foundation/primary/primary-6' : '#6C4F43',
        'Foundation/primary/primary-8' : '#4D3830',
        'Foundation/primary/primary-9' : '#3E2D26',
        'Foundation/neutral/neutral-5' : '#D9D9D9',
        'Foundation/neutral/neutral-8' : '#595959',
      },
      
    },
   
  },
  plugins: [],
}
