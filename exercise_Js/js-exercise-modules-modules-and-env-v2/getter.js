function mapUsers(users) {
  let result = {
    data: [],
    count: 0
  };
  users.forEach(user => {
    result.data.push(user)
    result.count++
  });
  return result
}


function mapArticles(articles) {
  let result = {
    data: [],
    count: 0
  }
  articles.forEach(article => {
    result.data.push(article);
    result.count++
  });
  return result;
}


// TODO: answer here
export default mapUsers;
export {mapArticles};