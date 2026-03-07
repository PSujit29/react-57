import { Heading1 } from "../../components/typography/heading";
import RegisterForm from "../../components/auth/RegisterForm";
import { RedirectLink } from "../../components/ui/AuthLink";
import { useOutletContext } from "react-router";
import type { IAuthLayoutOutletContext } from "../layout/authLayout.contract";
import { useEffect } from "react";

export default function RegisterPage() {
  const outletContext = useOutletContext<IAuthLayoutOutletContext>();
  useEffect(() => {
    outletContext.setSidePanel({
      title: "Register From Here",
      children: <p>Welcome to out CMS platform. Let's build something incredible together.</p>,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Heading1 pageTitle="Register" className="text-emerald-800 underline" />
      <RegisterForm />
      <div className="text-center mt-2">
        <span className="text-sm text-gray-600">Already have an account? </span>
        <RedirectLink to="/" txt="Login here" variant="link" className="" />
      </div>
    </>
  );
}
