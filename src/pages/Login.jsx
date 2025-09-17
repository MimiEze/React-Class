import { useForm } from "react-hook-form";
import { validateEmail, validatePassword } from "../utils/formValidate";


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: {
      errors, isSubmitting },
  } = useForm();

  return (
    <div className="w-[90vw] md:max-w-[320px] mx-auto">
      <h1 className="font-bold text-3xl mb-6">Login to your account</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label className="floating-label">
            <span>Email</span>
            <input
              type="email"
              placeholder="mail@site.com"
              className="input input-md"
              {...register("email", {
                validate: (value) => validateEmail(value),
              })}
            />
          </label>
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label className="floating-label">
            <span>Password</span>
            <input
              type="password"
              placeholder="password"
              className="input input-md"
              {...register("password", {
                validate: (value) => validatePassword(value),
              })}
            />
          </label>
          {errors.password && (
            <span className="text-xs text-red-600">{errors.password.message}
            </span>
          )}
        </div>
        <button className="btn btn-primary w-full" type="submit" disabled={isSubmitting}
        >
          {isSubmitting ? <span className="loading loading-spinner loading-md"></span> :
            "Continue"
          }
        </button>
      </form>
    </div>
  );
}