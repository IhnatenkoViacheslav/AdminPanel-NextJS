import { ReviewService } from "@/services/reviews.service";
import { IReviewDto } from "@/shared/interfaces/review-interface";
import { FC } from "react";
import {MdSend} from 'react-icons/md'
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from './AddReviewForm.module.scss'
import Field from "@/components/ui/Field/Field";

const AddReviewForm: FC<{movieId: number}> = ({
    movieId
}) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<IReviewDto>({
        mode: 'onChange'
    })

    const queryClient = useQueryClient()

    const { mutateAsync } = useMutation({
       mutationKey: ['add review'],
       mutationFn: (data: IReviewDto) => ReviewService.createReviews({...data, movieId}),
       async onSuccess() {
        reset()
        await queryClient.invalidateQueries({queryKey: ['get movie', movieId.toString()]})
       }
    })

    const onSubmit: SubmitHandler<IReviewDto> = async (data) => {
        await mutateAsync(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.description}>
                <Field
                    {...register('description', {
                        required: 'Message is required'
                    })}
                    //@ts-ignore
                    placeholder="Add your review"
                    error={errors.description}
                />

                <button className={styles.button}>
                    <MdSend/>
                </button>
            </div>
        </form>
    )
}

export default AddReviewForm