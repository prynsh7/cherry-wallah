/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Foundation/primary/primary-1': '#F0EDEC',
        'Foundation/primary/primary-2': '#DCD5D2',
        'Foundation/primary/primary-4': '#A29089',
        'Foundation/primary/primary-6': '#6C4F43',
        'Foundation/primary/primary-8': '#4D3830',
        'Foundation/primary/primary-9': '#3E2D26',
        'Foundation/neutral/neutral-5': '#D9D9D9',
        'Foundation/neutral/neutral-8': '#595959',
        "primary-1":'#F0EDEC',
        "primary-2":'#DCD5D2',
        "primary-6":'#6C4F43',
        "secondary-6":'#F8B75B',
        "neutral-1":'#FFFFFF',
        "neutral-2":'#FCFCFC',
        "neutral-3":'#F5F5F5',
        "neutral-5":'#D9D9D9',
        "neutral-6":'#BFBFBF',
        "neutral-8":'#595959',
        "linear":'var(--linear)',
      },
      backgroundImage: (theme) => ({
        'linear': `linear-gradient(to right, ${theme('colors.primary-6')}, ${theme('colors.secondary-6')})`,
      }),
      fontSize: {
        'Medium+/Display/Large': ['64px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '72px',
          letterSpacing: '-0.04em',
        }],
        'Medium+/Display/Medium': ['48px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '64px',
          letterSpacing: '-0.04em',
        }],
        'Medium+/Title/xxLarge': ['64px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '76px',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/xLarge': ['48px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/Large': ['40px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.02em',
        }],
  
        'Medium+/Title/Medium': ['32px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '40px',
          letterSpacing: '-0.015em',
        }],
  
        'Medium+/Title/Small': ['24px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/xSmall': ['18px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/xxsmall': ['14px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
        }],
        'Medium+/Paragraph/Large': ['18px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Large-Strong': ['18px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Medium': ['16px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Medium-Strong': ['16px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Small': ['14px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Small-Strong': ['14px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/xSmall': ['12px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/xSmall-Strong': ['12px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }],
  
        'Medium+/Label/Large': ['18px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Large-Strong': ['18px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Medium': ['16px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Medium-Strong': ['16px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Small': ['14px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Small-Strong': ['14px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/xSmall ': ['12px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/xSmall-Strong': ['12px', {
          fontFamily: 'Manrope',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
  
        'Small/Display/Large': ['48px',
          {
            fontFamily: 'Manrope',
            fontWeight: '700',
            lineHeight: '64px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Display/Medium': ['40px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xxLarge': ['48px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '56px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Title/xLarge': ['40px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Title/Large': ['32px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '40px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/Medium': ['24px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '32px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/Small': ['18px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xSmall': ['16px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xxsmall': ['12px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.05em',
          }
        ],
        'Small/Paragraph/Large': ['16px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Large-Strong': ['16px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Medium': ['14px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Medium-Strong': ['14px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Small': ['12px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Small-Strong': ['12px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/xSmall': ['10px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '16px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/xSmall-Strong': ['10px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Label/Large': ['16px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Large-Strong': ['16px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Medium': ['14px',
          {
            fontFamily: 'Manrope',
            fontStyle: 'Normal',
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Medium-Strong': ['14px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }
      ],
      'Small/Label/Small': ['12px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }
      ],
  
      'Small/Label/Small-Strong': ['12px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }
      ],
      'Small/Label/xSmall': ['10px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '500',
          lineHeight: '12px',
          letterSpacing: '-0.01em',
        }
      ],
  
      'Small/Label/xSmall-Strong': ['10px',
        {
          fontFamily: 'Manrope',
          fontStyle: 'Normal',
          fontWeight: '700',
          lineHeight: '12px',
          letterSpacing: '-0.01em',
        }
      ],
  
  
      }

    }
  },
  plugins: [],
}
