var Person = function(firstAndLast) {
    var fullName = firstAndLast;
    var split = fullName.split(' ');

    this.getFirstName = function(){
      return split[0];
    };
  
    this.getLastName = function(){
      return split[1];
    };
  
    this.getFullName = function(){      
      return fullName;
    };
  
    this.setFirstName = function(first){      
      split[0] = first;
      fullName = split.join(' ');
    };
  
    this.setLastName = function(last){
      split[1] = last;
      fullName = split.join(' ');
    };
  
    this.setFullName = function(firstAndLast){
      fullName = firstAndLast;
      split = fullName.split(' ');
    };
   
};

var bob = new Person('Bob Ross');
bob.getFullName();
