const user = {
    name: 'გუგა',
    lastName: 'მუჩიაშვილი',
    username: 'გუჯექსა',
    age:15,
    number:"555 00 26 46",
    hobby:'guitar, footbaal',
    country: 'Georgia',
    city:'Tbilisi',
    gender:'male',
    blood_group:'first +',
    foot_size:'40',
    adress:"vazisubnis dasaxleba 17a korpusi"
  };
  
  function createclone(object) {
    const clone = object;
    return clone;
  }
  
  const newobj = fun(user);

  console.log(newobj);