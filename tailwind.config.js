/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-10': '#1A3B36',
        'primary-9': '#204B44',
        'primary-8': '#285D55',
        'primary-7': '#306F66',
        'primary-6': '#398378',
        'primary-5': '#5D9990',
        'primary-4': '#82B1AA',
        'primary-3': '#AACAC5',
        'primary-2': '#CFE1DF',
        'primary-1': '#EBF3F2',
        'secondary-10': '#69ABA1',
        "neutral-1": '#FFFFFF',
        "neutral-2": '#FCFCFC',
        "neutral-3": '#F5F5F5',
        "neutral-4": '#F0F0F0',
        "neutral-5": '#D9D9D9',
        "neutral-6": '#BFBFBF',
        "neutral-7": '#8C8C8C',
        "neutral-8": '#595959',
        "neutral-9": '#454545',
        "neutral-10": '#262626',
        "neutral-11": '#1F1F1F',
        "neutral-12": '#141414',
        "neutral-13": '#000000',
        "linear": 'var(--linear)',
      },
      backgroundImage: (theme) => ({
        'linear': `linear-gradient(to right, ${theme('colors.primary-6')}, ${theme('colors.secondary-10')})`,
        'dashboard-home-1': "url('assets/images/Dashboard/home1.png')",
        'dashboard-home-2': "url('assets/images/Dashboard/home3.png')",
        'dashboard-home-3': "url('assets/images/Dashboard/home2.png')",
      }),
      fontSize: {
        'Medium+/Display/Large': ['64px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '72px',
          letterSpacing: '-0.04em',
        }],
        'Medium+/Display/Medium': ['48px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '64px',
          letterSpacing: '-0.04em',
        }],
        'Medium+/Title/xxLarge': ['64px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '76px',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/xLarge': ['48px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '56px',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/Large': ['40px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '48px',
          letterSpacing: '-0.02em',
        }],
        'Medium+/Title/Medium': ['32px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '40px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/Small': ['24px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/xSmall': ['18px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Title/xxsmall': ['14px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
        }],
        'Medium+/Paragraph/Large': ['18px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Large-Strong': ['18px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '28px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Medium': ['16px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Medium-Strong': ['16px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Small': ['14px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/Small-Strong': ['14px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '20px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/xSmall': ['12px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }],
        'Medium+/Paragraph/xSmall-Strong': ['12px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
        }],

        'Medium+/Label/Large': ['18px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Large-Strong': ['18px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '24px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Medium': ['16px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Medium-Strong': ['16px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Small': ['14px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/Small-Strong': ['14px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/xSmall ': ['12px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],
        'Medium+/Label/xSmall-Strong': ['12px', {
          fontFamily: 'Public Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '16px',
          letterSpacing: '-0.01em',
        }],

        'Small/Display/Large': ['48px',
          {
            fontFamily: 'Public Sans',
            fontWeight: '700',
            lineHeight: '64px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Display/Medium': ['40px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xxLarge': ['48px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '56px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Title/xLarge': ['40px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '48px',
            letterSpacing: '-0.02em',
          }
        ],
        'Small/Title/Large': ['32px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '40px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/Medium': ['24px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '32px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/Small': ['18px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xSmall': ['16px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Title/xxsmall': ['12px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.05em',
          }
        ],
        'Small/Paragraph/Large': ['16px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Large-Strong': ['16px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '24px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Medium': ['14px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Medium-Strong': ['14px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Small': ['12px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/Small-Strong': ['12px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/xSmall': ['10px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '16px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Paragraph/xSmall-Strong': ['10px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.015em',
          }
        ],
        'Small/Label/Large': ['16px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Large-Strong': ['16px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '20px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Medium': ['14px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Medium-Strong': ['14px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/Small': ['12px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '500',
            lineHeight: '16px',
            letterSpacing: '-0.01em',
          }
        ],

        'Small/Label/Small-Strong': ['12px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '-0.01em',
          }
        ],
        'Small/Label/xSmall': ['10px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '500',
            lineHeight: '12px',
            letterSpacing: '-0.01em',
          }
        ],

        'Small/Label/xSmall-Strong': ['10px',
          {
            fontFamily: 'Public Sans',
            fontStyle: 'Normal',
            fontWeight: '700',
            lineHeight: '12px',
            letterSpacing: '-0.01em',
          }
        ],


      },
      animation: {
        'blur-slow': 'blur 0.7s linear 1',
        'shake-fast': 'shake 0.2s linear 4',
        'slideUp-1': 'slideUp 0.6s linear 1',
        'slideLeft-1': 'slideLeft 0.6s linear 1',
        'width': 'widthF 0.5s linear 1'
      },
      keyframes: {
        blur: {
          '0%, 100%': { filter: 'blur(0px)' },
          '20%, 80%': { filter: 'blur(20px)' }
        },
        shake: {
          '0%, 100%': { marginLeft: '0' },
          '33%': { marginLeft: '-5px', marginRight: '5px' },
          '66%': { marginLeft: '5px', marginRight: '-5px' }
        },
        slideUp: {
          '0%': { opacity: '0', marginTop: '20px' },
          '85%': { marginTop: '-3px' },
          '100%': { opacity: '1', marginTop: '0px' }
        },
        widthF: {
          '0%': { width: '0%' },
          '85%': { width: '105%' },
          '100%': { width: '100%' }
        },
        slideLeft: {
          '0%': { opacity: '0', marginLeft: '20px', marginRight: '-20px' },
          '85%': { marginLeft: '-3px', marginRight: '3px' },
          '100%': { opacity: '1', marginLeft: '0px', marginRight: '0px' }
        }
      },

    }
  },
  plugins: [],
}
