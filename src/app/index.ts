import { envsVariables } from "./config/get.env.config";

function main(){
  console.log('Hello World!');
  const envs = envsVariables.HuggingFaceAPIKye
  console.log(envs);

}

main();