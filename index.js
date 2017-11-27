const app = "I don't do much.";




const token = '39380f11db515d01709a391b20d05865f160cf64'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));