// console.log("document::",document.getElementsByClassName('login'));

var login = document.getElementsByClassName('login')[0];
var register = document.getElementsByClassName('register')[0];

var logemail = document.getElementsByClassName('email')[0];
var logpassword = document.getElementsByClassName('password')[0];


function signup(){
    login.style.display = 'none';
    register.style.display = 'block';
}

function log(){
    login.style.display = 'block';
    register.style.display = 'none';
}

var obj = {};

var arr1 = [];
var obj1 = {};

var data = [];
var getdata;

var passwordregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
var emailregex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phnoregex = /^[0-9]{10}$/;


function onchanged(event,type){
    if(type == 'username'){
        obj1['username'] = event.target.value;
    }
    if(type == 'email'){
        if(emailregex.test(event.target.value)){
            obj1['email'] = event.target.value; 
            }
            else{
                alert('please enter the valid email!');
                // obj1['email'] = '';
                // email.value='';
            }
    }
    if(type == 'phoneno'){
        if(phnoregex.test(event.target.value)){
            obj1['phoneno'] = event.target.value; 
            }
            else{
                alert('please enter the valid phoneno!');
                obj1['phoneno'] = '';
                // phoneno.value='';
            }
    }
    if(type == 'password'){
        if(passwordregex.test(event.target.value)){
        obj1['password'] = event.target.value; 
        }
        else{
            alert('please enter strong password!');
            // obj1['password'] = '';
        }
    } 
    if(type == 'repassword'){
        obj1['repassword'] = event.target.value;
    }
}

function onregister(){
    
    if(Object.keys(obj1).length == 5){
        if(obj1['username'] != '' && obj1['email'] != '' && obj1['phoneno'] != ''){
            if(obj1['password'] == obj1['repassword']){
                
                delete obj1['repassword'];
                
                arr1.push(obj1);
                for(let i = 0; i<data.length; i++){
                    console.log(data[i].email);
                    if(data[i].email == obj1.email){
                        console.log(data);
                        alert('email already exist');
                        arr1.pop();
                    }
                    else if(data[i].phoneno == obj1.phoneno){
                        console.log(data);
                        alert('phoneno already exist');
                        arr1.pop();
                    }
                }
                // for(let i = 0; i<data.length; i++){
                //     if(data[i].email == obj1.email){
                //         console.log(data);
                //         alert('email already exist');
                //         arr1.pop();
                //     }
                // }
                
                console.log(arr1);
                localStorage.setItem('userdata',JSON.stringify(arr1));

                getdata = localStorage.getItem('userdata');

                data = JSON.parse(getdata);
                
                // arr1.push(obj1);

                // console.log(data);

                username.value = "";
                email.value = '';
                phoneno.value = '';
                password.value = '';
                repassword.value = '';

                obj1 = {};

            }
            else{
                alert('incorrect confirm password');
            };
            
        }
        else{
            alert('Please fill all fields');
            delete obj1;
        };
    }
    else{
    alert('Please fill all fields');
    delete obj1;
    };

};

function onchangehandler(event,type){
    if(type == 'email1'){
        obj['email'] = event.target.value;
    }
    // if(type == 'phoneno'){
    //     obj['phoneno'] = event.target.value;
    // }
    if(type == 'password1'){
        obj['password'] = event.target.value;
    }
}

function onloghandler(){
    
    if(Object.keys(obj).length == 2){

        getdata = localStorage.getItem('userdata');

        data = JSON.parse(getdata);

        data && data.find((item) => {
            if(item.email == obj['email'] || item.phoneno == obj['email'] && item.password == obj['password']){
                // console.log(item.email,item.password)
                // alert('Login successful');
                location.href = "./slack/index.html";
                logemail.value = '';
                logpassword.value = '';
                obj = {};
            }
            else{
                alert('Invalid credentials');
            }
            })
            // .forEach((item) => {
            //     console.log(item.email,item.password)
            //     alert('Login successful');
            //     location.href = "./slack/index.html";
            // }
        

        // alert('Please enter a valid email and password');
    }
    else{
    alert('Please fill all fields');
    };
};



// function onchanged(event,type){
//     if(type == 'username'){
//         obj1['username'] = event.target.value;
//     }
//     if(type == 'email'){
//         obj1['email'] = event.target.value; 
//     }
//     if(type == 'phoneno'){
//         obj1['phoneno'] = event.target.value;
//     }
//     if(type == 'password'){
//         obj1['password'] = event.target.value;
//     }
//     if(type == 'repassword'){
//         obj1['repassword'] = event.target.value;
//     }
// }

// function onregister(){
    
//     if(Object.keys(obj1).length == 5){
//         if(obj1['username'] != '' && obj1['email'] != '' && obj1['phoneno'] != ''){
//             if(obj1['password'] == obj1['repassword']){
                
//                 delete obj1['repassword'];
                
//                 arr1.push(obj1);

//                 console.log(arr1);
                
//                 obj1 = {};
                
//                 localStorage.setItem('userdata',JSON.stringify(arr1));

//                 getdata = localStorage.getItem('userdata');

//                 data = JSON.parse(getdata);
                
//                 console.log(data);

//                 username.value = '';
//                 email.value = '';
//                 phoneno.value = '';
//                 password.value = '';
//                 repassword.value = '';

//             }
//             else{
//                 alert('incorrect confirm password');
//             };
            
//         }
//         else{
//             alert('Please fill all fields');
//             delete obj1;
//         };
//     }
//     else{
//     alert('Please fill all fields');
//     delete obj1;
//     };

// };














































// var arr = []; // {e:cghk,p:jk},
// var obj = {};

// var email = document.getElementById('email');
// var password = document.getElementById('password');

// function onchanged(event,type){
//     if(type == 'email'){
//         obj['email'] = event.target.value;
//     }
//     else if(type == 'password'){
//         obj['password'] = event.target.value;
//         console.log("password");
//     }
// };


// function onclicked(){

//         if(Object.keys(obj).length == 2){
//             arr.push(obj);
//             console.log(arr);
//             obj = {};  // Reset the object to empty for next entry.
        
//             email.value = '';
//             password.value = '';

//         }
    
//         else if(email.value == '' && password.value == ''){
//             alert('Please enter the email and password');
//         }
//         else if(email.value == ''){
//             // delete obj['password'];
//             alert('Please enter the email');
//         }
//         else if(password.value == ''){
//             // delete obj['email'];
//             alert('Please enter the password');
//         }
        
//         // else{
//         //     alert('Please enter email and password');
//         // }
    
// };