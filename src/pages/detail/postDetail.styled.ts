import styled from '@emotion/styled'

export const PostHeader = styled('div')`
  width: 75%;
  margin: 50px auto 10px auto;
  text-align: center;

  .date {
    animation: fadein 2s;
    color: #cc2a2a;
  }

  div:hover {
    opacity:1;
  }

  h1 {
    width:90%;
    margin:0 auto;
    font-family: 'NanumSquareRound', sanserif;
    margin-top: 10px;
    font-size: 50px;
    animation: fadein 4s;
    padding-bottom:10px;
    border-bottom:1px solid #f5f5f7;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    h1{
      font-size:35px;
    }
  }
}
`

export const GobackIconWrapper = styled('div')`
  opacity: 0.4;
  display: inline-block;
  padding: 7px;
  float: left;
  cursor: pointer;
`

export const PostContentWrapper = styled('section')`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  padding: 40px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  * {
    font-family: 'NanumSquareRound', sanserif;
  }
`
