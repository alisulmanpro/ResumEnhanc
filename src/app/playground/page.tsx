import { Fragment } from "react/jsx-runtime";

const Input = ({
  title, type, mal, placeholder, err, show
}: Readonly<{
  title: string;
  type: string;
  placeholder?: string;
  err?: string;
  mal: boolean;
  show: boolean | undefined;
}>) => {
  return (
    <fieldset className="fieldset -space-y-2.5">
      <div className="flex items-center justify-between">
        <legend className="fieldset-legend">{title}{mal && (<span className="text-red-500">*</span>)}</legend>
        {show && (
          <label className="label capitalize">
            <input type="checkbox" className="checkbox checkbox-xs" />
            middlename
          </label>
        )}
      </div>
      <input type={type} className="input input-sm p-4!" placeholder={placeholder || "Type here"} />
      <p className="label hidden">{err}</p>
    </fieldset>
  )
}

export default function Playground() {
  const per_info = [
    {
      title: "First Name",
      type: "text",
      mandatory: true,
      placeholder: "",
      error: "",
      m_show: true
    },
    {
      title: "Second Name",
      type: "text",
      mandatory: true,
      placeholder: "",
      error: ""
    },
  ]
  return (
    <Fragment>
      <h1 className="text-2xl font-medium">Personal Information</h1>
      <p className="text-sm">Define your professional persona and craft a compelling headline that captures recruiter attention in seconds.</p>
      <div className="divider"></div>
      <form action="" className="grid grid-cols-2 gap-10">
        {per_info?.map((data, index) => (
          <Input
            key={index}
            type={data.type}
            title={data.title}
            placeholder={data.placeholder}
            err={data.error}
            mal={data.mandatory}
            show={data.m_show}
          />
        ))}
      </form>
    </Fragment>
  );
}
