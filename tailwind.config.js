/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xuan: {
          50: '#FFFCF6',  // 暖白卡片主色
          100: '#F7F3EB', // 宣纸主背景
          200: '#EFE8DC',
          300: '#E3DCD1',
          400: '#D5CBBF',
        },
        card: {
          warm: '#FFFCF6', // 卡片专用纯净暖白
        },
        zhusha: {
          DEFAULT: '#A9322D', // 朱砂红主色
          hover: '#932925',
          light: '#FBF0EF',
          border: '#E8C5C3',
          dark: '#7D221E',
        },
        jiuhong: {
          DEFAULT: '#461F24', // 深酒红起卦场景
          dark: '#35161A',
          light: '#5E2D33',
        },
        yajin: {
          DEFAULT: '#B59A64', // 哑金点缀
          light: '#C9B385',
          dark: '#937B49',
        },
        mose: {
          DEFAULT: '#292722', // 墨色正文
          light: '#48443D',
          muted: '#80796E', // 灰褐辅助文字
        },
      },
      fontFamily: {
        serif: [
          '"Songti SC"',
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          'SimSun',
          'STSong',
          'Georgia',
          'serif',
        ],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          'sans-serif',
        ],
      },
      borderRadius: {
        'card': '20px',    // 普通卡片圆角 20px
        'master': '28px',  // 艺术主卡圆角 28px
      },
      boxShadow: {
        'subtle': '0 2px 12px -2px rgba(41, 39, 34, 0.04)',
        'card': '0 4px 20px -2px rgba(41, 39, 34, 0.06)',
        'float': '0 12px 32px -4px rgba(41, 39, 34, 0.10)',
        'jade': '0 0 35px 8px rgba(245, 235, 215, 0.25), inset 0 0 20px 4px rgba(255, 255, 255, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
