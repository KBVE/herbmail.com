const l="/api/v1/",w="5ba581fa-b6fc-4bb0-8222-02fcd6a59e35",z="https://js.hcaptcha.com/1/api.js",h="auth/register",x="auth/login";class t{status;error;message;data;constructor(r,a,s){this.status=r,this.error=r<200||r>=300,this.message=a,this.data=s}display(){console.log(`Status: ${this.status}, Message: ${this.message}, Error: ${this.error}, Data: ${JSON.stringify(this.data)}`)}scope(){try{return JSON.stringify(this.data)}catch(r){return console.error("Parsing error:",r),"Error: Unable to parse data"}}async serialize(){try{return JSON.stringify({status:this.status,error:this.error,message:this.message,data:this.data})}catch(r){return console.error("Serialization error:",r),JSON.stringify({status:500,error:!0,message:"Internal Server Error: Unable to serialize response",data:{}})}}static async deserialize(r){try{const a=JSON.parse(r);return new t(a.status,a.message,a.data)}catch(a){return console.error("Deserialization error:",a),new t(500,"Internal Server Error: Unable to deserialize response",{})}}}const f=new RegExp(/^[a-z0-9]+$/i),c=8,g=async e=>e.length<c?new t(400,"Validation Error",{error:"Username is too short. Minimum length is "+c}):f.test(e)?new t(200,"Validation Successful",{message:"Username is valid."}):new t(400,"Validation Error",{error:"Username contains invalid characters."});async function b(e){try{const r=await g(e);return r.status===200?{isValid:!0,error:null}:{isValid:!1,error:r.data.error}}catch{return{isValid:!1,error:"An unexpected error occurred"}}}const m=new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/),p=async e=>m.test(e)?new t(200,"Validation Successful",{message:"Email is valid."}):new t(400,"Validation Error",{error:"Email is invalid."});async function E(e){try{const r=await p(e);return r.status===200?{isValid:!0,error:null}:{isValid:!1,error:r.data.error}}catch{return{isValid:!1,error:"An unexpected error occurred"}}}const y=async e=>{if(e.length<8)return new t(400,"Validation Error",{error:"Password is too short"});if(e.length>255)return new t(400,"Validation Error",{error:"Password is too long"});const r=/[A-Z]/.test(e),a=/[a-z]/.test(e),s=/\d/.test(e),n=/[^A-Za-z0-9]/.test(e);return!r||!a||!s||!n?new t(400,"Validation Error",{error:"Password must include uppercase, lowercase, digits, and special characters"}):new t(200,"Validation Successful",{message:"Password is valid"})};async function V(e){try{const r=await y(e);return r.status===200?{isValid:!0,error:null}:{isValid:!1,error:r.data.error}}catch{return{isValid:!1,error:"An unexpected error occurred"}}}async function u(e,r,a){try{const s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",...a},body:JSON.stringify(r),credentials:"include"}),n=await s.json(),o=n.message||(s.ok?"Success":"Error"),i=!s.ok&&n.error?{error:n.error}:n;return new t(s.status,o,i)}catch(s){return console.error("Request failed:",s),new t(500,"Internal Server Error: Request failed",{})}}async function S(e,r,a,s,n){const o=`${e}${l}${h}`;return u(o,{username:r,email:a,password:s,token:n},{"x-kbve-shieldwall":"auth-register"})}async function v(e,r,a){const s=`${e}${l}${x}`;return u(s,{email:r,password:a},{"x-kbve-shieldwall":"auth-login"})}export{V as a,z as b,E as c,b as d,w as h,v as l,S as r};
