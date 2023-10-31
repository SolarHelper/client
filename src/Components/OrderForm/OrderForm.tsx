'use client'

import React, {useState} from 'react';
import { useForm, SubmitHandler,Controller } from "react-hook-form"
import { MuiTelInput} from "mui-tel-input";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";

import styles from './orderForm.module.scss';



type Inputs = {
    nameUser: string
    phone?: string
    email: string
    country: string
    region: string
    code: string
    text: string
}

const OrderForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        mode: 'onBlur',

    });
    const [country, setCountry] = useState<string>('');
    const [region, setRegion] = useState<string>('');


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log({...data, country, region});
        reset();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <h2 className={styles.form__title}>Оплата и доставка</h2>
                <div className={styles.form__wrapper}>
                    <input {...register('nameUser',
                        {required: 'Поле обязательно к заполнению!',
                            minLength: {value: 4, message: 'Минимум 4 символа'}
                        })} className={styles.form__wrapper__input} type="text"  placeholder='Ф.И.О.'/>
                    <div className={styles.error}>
                        {errors?.nameUser && <p>{errors?.nameUser?.message || 'Error'}</p>}
                    </div>
                </div>

                <div className={styles.form__wrapper}>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{required: true}}
                        // rules={{ validate: matchIsValidTel }}
                        render={({ field, fieldState }) => (
                            <MuiTelInput className={styles.muiTelInput}
                                {...field}
                                defaultCountry="RU"
                                onlyCountries={['RU', 'UA', 'BY']}
                                helperText={fieldState.invalid ? "Введите корректный номер" : ""}
                                error={fieldState.invalid}
                            />
                        )}
                    />
                </div>

                <div className={styles.form__wrapper}>
                    <input {...register('email',
                        {required: 'Ввведите свой e-mail',
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Неверный формат адреса',
                        },})} className={styles.form__wrapper__input} type="text"  placeholder='E-mail'/>
                    <div className={styles.error}>
                        {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                    </div>
                </div>

                <div className={styles.form__wrapper}>
                    <Controller
                        name="country"
                        control={control}
                        rules={{required: 'Выберите страну'}}
                        render={({field}) => (
                            <CountryDropdown
                                {...field}
                                whitelist={["RU", "UA", "BY"]}
                                defaultOptionLabel="Выберите свою страну."
                                value={country}
                                onChange={(arg) => {
                                    setCountry(arg);
                                    field.onChange(arg);
                                }} />
                        )}
                    />
                    <div className={styles.error}>
                        {errors?.country && <p>{errors?.country?.message || ''}</p>}
                    </div>
                </div>

                <div className={styles.form__wrapper}>
                    <Controller
                        name="region"
                        control={control}
                        rules={{required: 'Выберите область'}}
                        render={({field}) => (
                            <RegionDropdown
                                {...field}
                                blankOptionLabel="Вначале выберите страну."
                                defaultOptionLabel="Выберите область."
                                country={country}
                                value={region}
                                onChange={(selectedRegion) => {
                                    setRegion(selectedRegion);
                                    field.onChange(selectedRegion);
                                }} />
                        )}
                    />
                    <div className={styles.error}>
                        {errors?.region && <p>{errors?.region?.message || ''}</p>}
                    </div>
                </div>

                <div className={styles.form__wrapper}>
                    <input {...register('code',
                        {required: 'Укажите номер склада, куда будет доставка!'})} className={styles.form__wrapper__input} type="text"  placeholder='Номер склада'/>
                    <div className={styles.error}>
                        {errors?.code && <p>{errors?.code?.message || 'Error'}</p>}
                    </div>
                </div>
                <textarea {...register('text')}   placeholder='Комментарий'></textarea>
                <button type='submit' className={`button ${styles.form__button}`}>Оформить заказ</button>
            </div>
        </form>
    );
};

export default OrderForm;