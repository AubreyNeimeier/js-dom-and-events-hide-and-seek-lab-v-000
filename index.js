// OPEN INDEX.HTML in the browser to play with these selectors in the DOM. 

function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(nested, target){
    return document.querySelector('#nested .target');
  }
// MY SOLUTION WHICH WORKS PERFECTLY FINE
// the i + n doesn't make sense to me. it seems like its adding the 
//incrementer to n and overriding previous value instead of simply adding n 
//to whatever exists in the inner HTML. see line 32!!!! 

  function increaseRankBy(n){
      const x = document.getElementsByClassName('ranked-list');

      for (let i = 0; i < x.length; i ++){
          x[i].innerHTML = (i + n).toString()
      };
  }

// FLATIRONS SOLUTION - more complex and abstract
/*
function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')
  
    // this first for loops grabs the first two groups of ranked-lists
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children
    
    // Now we are iterating through the two groups and increasing each by n. 
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }
 */

// MY SOLUTION. Works but is not abstract at all. 

  function deepestChild(){
      return document.querySelector('#grand-node div div div div');
  }

// FLATIRONS SOLUTION will find the deepest child without know exactly how deep it is. 
 /*

 // LOGIC is WHILE next deepest element exists--- keep reassigning the node. 
 // The FINAL remaining NODE(aka the last definition of node) will be the deepest element

  function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]
  
    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
  
    return node
  }

  */ 