import {
  // FieldPathValue,
  // FieldValues,
  SetValueConfig,
  // UnpackNestedValue,
  UseFormWatch,
} from "react-hook-form";
import { useEffect } from "react";
import { PostData } from "../types";

interface UsePersistFormProps<T = unknown> {
  formName: string;
  watch: UseFormWatch<PostData>;
  setValue: (
    name: any,
    value:any,
    // value: UnpackNestedValue<FieldPathValue<FieldValues, any>>,
    options?: SetValueConfig
  ) => void;
  shouldValidate?: boolean;
  shouldDirty?: boolean;
  onRestored?: (values: T) => void;
}

export const usePersistForm = <T = unknown,>(
  settings: UsePersistFormProps<T>
) => {
  const {
    watch,
    setValue,
    formName,
    shouldDirty = false,
    shouldValidate = false,
    onRestored,
  } = settings;

  const currentValue = watch();
  const getSessionStorage = () => window.sessionStorage;
  const productStartTimesWatcher=currentValue&&currentValue.productTimes?.includes('productStartTimes')
  const productOpeningHoursWatcher=currentValue&&currentValue.productTimes?.includes('productOpeningHours')
  useEffect(() => {
    const storage = getSessionStorage().getItem(formName);
    let restoredData: any = {
      productOpeningHours: null,
      productStartTimes: null,
      capabilities: [],
      supplierId: "",
      url: "",
      productTimes: [],
    };

    if (storage) {
      const storedValues = JSON.parse(storage);

      for (const [key, value] of Object.entries(storedValues)) {
        setValue(key, value, { shouldValidate, shouldDirty });
        restoredData[key] = value;
      }
      if (onRestored) onRestored(restoredData);
    }
  }, [formName, setValue, shouldValidate, shouldDirty,onRestored]);

  useEffect(() => {
    console.log(currentValue);
    if(!productStartTimesWatcher){
        const {productStartTimes, ...newValues}=currentValue
        getSessionStorage().setItem(formName, JSON.stringify(newValues));
    }else if(!productOpeningHoursWatcher){
      const {productOpeningHours, ...newValues}=currentValue
      getSessionStorage().setItem(formName, JSON.stringify(newValues));
    }
    getSessionStorage().setItem(formName, JSON.stringify(currentValue));
  });
};
