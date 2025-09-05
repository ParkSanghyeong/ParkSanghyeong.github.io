/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_includes/**/*.{html,js}',
        './_layouts/**/*.{html,js}',
        './_posts/**/*.md',
        './_projects/**/*.md',
        './*.{html,js,md}' // index.html, about.md 등 루트 파일 포함
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'), // 'prose' 클래스를 사용하기 위해 필수!
    ],
}
