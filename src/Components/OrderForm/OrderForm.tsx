import React from 'react';
import { useForm, SubmitHandler,Controller } from "react-hook-form"



import Image from "next/image";


import User from '../../assets/img/user.svg';
import Money from '../../assets/img/money.png'

import styles from './orderForm.module.scss';


type Inputs = {
    nameUser: string
    phone?: string
    email: string
    newMail: string
    city: string
    code: string
    text: string
    tel: string
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
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>


            <div className={styles.container}>
                <div className={styles['form__wrapper']}>
                    <div className={styles['form__user']}>
                        <div className={styles['form__user-info']}>
                            <Image src={User} width={50} height={64} alt="user"/>
                            <h2 className={styles['form__title']}>Контактные данные</h2>
                        </div>
                        <div className={styles['form__user-inputs']}>
                            <div className={styles['form__user-inputs-wrapper']}>
                                <input {...register('nameUser',
                                    {required: 'Поле обязательно к заполнению!',
                                        minLength: {value: 5, message: 'Минимум 5 символов'}
                                    })} className={styles['form__user-input']} type="text"  placeholder='Ф.И.О.'/>
                                <div className={styles.error}>
                                    {errors?.nameUser && <p>{errors?.nameUser?.message || 'Error'}</p>}
                                </div>
                            </div>

                            <div className={styles['form__user-inputs-wrapper']}>
                                <input {...register('phone', {required: 'Ввведите свой номер телефона'})}  className={styles['form__user-input']} type="text"  placeholder='Контактный телефон'/>
                                <div className={styles.error}>
                                    {errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}
                                </div>
                            </div>

                            <div className={styles['form__user-inputs-wrapper']}>
                                <input {...register('email', {required: 'Ввведите свой e-mail'})} className={styles['form__user-input']} type="text"  placeholder='E-mail'/>
                                <div className={styles.error}>
                                    {errors?.email && <p>{errors?.email?.message || 'Error'}</p>}
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Оформить заказ</button>
                    </div>


                    <div className={styles['form__price']}>
                        <div className={styles['form__user-info']}>
                            <Image src={Money} width={70} height={70} alt="money"/>
                            <h2 className={styles['form__title']}   >Оплата и доставка</h2>
                        </div>

                        <div className={styles['form__price-inputs']}>


                            <div className={styles['form__price-inputs-wrapper']}>
                                <input {...register('newMail',
                                    {required: 'Обязательное поле!'})} className={styles['form__price-input']} type="text"  placeholder='Доставка новой почтой'/>
                                <div className={styles.error}>
                                    {errors?.newMail && <p>{errors?.newMail?.message || 'Error'}</p>}
                                </div>
                            </div>

                            <div className={styles['form__price-inputs-wrapper']}>
                                <input {...register('city',
                                    {required: 'Выберите город!'})} className={styles['form__price-input']} type="text"  placeholder='Город'/>
                                <div className={styles.error}>
                                    {errors?.city && <p>{errors?.city?.message || 'Error'}</p>}
                                </div>
                            </div>

                            <div className={styles['form__price-inputs-wrapper']}>
                                <input {...register('code',
                                    {required: 'Выберите номер склада, куда будет доставка!'})} className={styles['form__price-input']} type="text"  placeholder='Номер склада'/>
                                <div className={styles.error}>
                                    {errors?.code && <p>{errors?.code?.message || 'Error'}</p>}
                                </div>
                            </div>

                            <textarea {...register('text')}   placeholder='Комментарий'></textarea>
                        </div>

                    </div>
                </div>
            </div>


        </form>
    );
};

export default OrderForm;