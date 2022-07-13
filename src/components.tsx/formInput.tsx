import { FC } from "react";
import { useFormContext } from "react-hook-form";

type IFormInput = {
  name: string;
  label: string;
  required: boolean;
  isNested: boolean;
  nested?:string;
  group?:string;
}

const FormInput: FC<IFormInput> = ({ label, name, required,isNested,nested, group  }) => {
  const { register, formState: { errors }, } = useFormContext();

 
//   let errorState=  isNested ? !!errors[name]: !!errors[name]

//   console.log(registerState);
//   console.log(!!errors[group]);
  
  
  return (
    <div className="mb-3 mt-2">
      <label className={`form-label ${required ? "required" : ""}`}>
        {label}
      </label>
      <input
        {...register(`${name}`)}
        className={`form-control ${!!errors[name] ? 'is-invalid' : ''}`}
        autoComplete="off"
        name={name}
      />

    <div className="invalid-feedback">{isNested? `${errors[name]?.nested ? errors[name]?.nested?.message : ''}`:`${errors[name] ? errors[name]?.message : ''}`}</div>
    </div>
  );
};

export default FormInput;
