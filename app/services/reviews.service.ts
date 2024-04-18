import { IReview, IReviewDto } from "@/shared/interfaces/review-interface"
import axios from "api/interceptor"

export const ReviewService = {
    async createReviews(body: IReviewDto ) {
        return axios.post<IReview>(`/review`, body)
    }
}