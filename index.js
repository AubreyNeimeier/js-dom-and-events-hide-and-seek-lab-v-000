function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(nested, target){
    return document.querySelector('#nested .target');
  }

  function increaseRankBy(n){
      const x = document.getElementsByClassName('ranked-list');

      for (let i = 0; i < x.length; i ++){
          x[i].innerHTML = (i + n).toString()
      };
  }

  function deepestChild(){
      return document.querySelector('#grand-node div div div div');
  }