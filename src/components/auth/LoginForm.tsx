import { LabeledInput } from "../form/input";
import { Button } from "../form/button";
import { RedirectLink } from "../ui/AuthLink";
import { useForm } from "react-hook-form";
import type { ILoginCredentials } from "../../types/authType";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

const loginDTO = z.object({
  email: z.email().nonempty("Email is required").nonoptional(),
  password: z.string().min(8).nonempty("Password is required").nonoptional(),
});

export default function LoginForm() {
  const {handleSubmit, control, formState: { errors }} = useForm<ILoginCredentials>({
      defaultValues: { email: "", password: "" }, 
      resolver: zodResolver(loginDTO),
    });

  const handleLoginSubmit = (data:ILoginCredentials) => {
    console.log(data); 
    //webstorage
    // document.cookie = "name=value;"
    const response = {accessToken:"abc123xyz"}
    Cookies.set("_at57", response.accessToken, {
      expires:1,
      // priority:"high",
      // domain:"localhost",
      sameSite:"Strict",
      secure:true
    });
    localStorage.setItem("_at57", response.accessToken)
    // const accessToken = localStorage.getItem("_at57")
    // console.log(accessToken)
    // sessionStorage.setItem("_at57", response.accessToken)
    //TODO Add API call later
  };
  // {errors && console.log(errors);}

  return (
    <>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="flex flex-col gap-5 w-full">
        <LabeledInput type="email" label="Email" name="email" handler={control} errMsg={errors?.email?.message} />
        <LabeledInput type="password" label="Password" name="password" handler={control} errMsg={errors?.password?.message} />
        <div>
          <div className="flex w-full justify-end">
            <RedirectLink to="/forget-password" variant="link" txt="Forget Password?"className="italic font-medium" />
          </div>

          <div className="flex w-full gap-3 mt-4">
            <Button type="reset" variant="danger" txt="Cancel" />
            <Button type="submit" txt="Login" />
          </div>
        </div>
      </form>
    </>
  );
}
