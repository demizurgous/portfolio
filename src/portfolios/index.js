const clone = (target) => {
  return JSON.parse(JSON.stringify(target))
}

const testPortfolio = {
  title: 'beauty shots',
  date: 'good day tomorrow',
  description: 'bass ass shit',
  thumbnailUri: 'https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n',
  items: [
    {
      type: 'imageset',
      title: 'Yaho',
      description: 'moo ya ho',
      images: [
        {
          uri: 'https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n',
        },
        {
          uri: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        },
        {
          uri: "https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n",
        },
        {
          uri: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        }
      ]
    },
    {
      type: 'description',
      title: 'Yaho',
      description: 'moo ya ho',
    },
    {
      type: 'image',
      title: 'Yaho',
      description: 'moo ya ho',
      uri: 'https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n'
    },
  ]
}
const test5 = {
  ...testPortfolio,
  ...{title: 've문제없지', description: '산와산와', thumbnailUri: 'http://cdn.kormedi.com/wp-content/uploads/2019/07/bobross.jpg'}
}
const test4 = {
  ...testPortfolio,
  ...{title: 'sda문제없지', description: '산와산와', thumbnailUri: 'http://cdn.kormedi.com/wp-content/uploads/2019/07/bobross.jpg'}
}
const test3 = {
  ...testPortfolio,
  ...{title: '문ad제없지', description: '산와산와', thumbnailUri: 'http://cdn.kormedi.com/wp-content/uploads/2019/07/bobross.jpg'}
}
const testPortfolio2 = {
  ...testPortfolio,
  ...{title: 'beauty shots 2',
  date: 'good day tomorrow',
  description: '무야호',
  thumbnailUri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
  }
}
export default {
  first: testPortfolio,
  total: [testPortfolio, testPortfolio2, test3, test4, test5]
}