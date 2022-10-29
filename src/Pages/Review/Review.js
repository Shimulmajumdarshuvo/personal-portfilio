import React from 'react';
import './Review.css';
import { BsFillStarFill } from "react-icons/bs";


const Review = () => {
    return (
        <div>

            <div className="Review-Main">
                <div className="review">

                    <div className="subReview">
                        <div className="singleReview-part1">

                        </div>
                        <div className="singleReview-part2">
                            <div className="singleReview">
                                <div className="client flex">
                                    <h2>Sen Watson</h2>
                                    <img src=" http://ripehp.files.wordpress.com/2013/07/john-b-watson.jpg" alt="" />
                                </div>
                                <p>Thanks for sharing your rating with us and the community.“Thanks so much for taking the time to leave us a 5-star rating – it's much appreciated!”</p>
                                <span><BsFillStarFill></BsFillStarFill></span>  <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span>
                            </div>

                        </div>

                    </div>
                    <div className="subReview">
                        <div className="singleReview-part1">

                        </div>
                        <div className="singleReview-part2-2">
                            <div className="singleReview">
                                <div className="client flex">
                                    <h2>Arthur Miller</h2>
                                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UGE1fqILiBcMleAsDU0uLOR3x0_PHorf1g&usqp=CAU" alt="" />
                                </div>
                                <p>Thanks for sharing your rating with us and the community. “Thanks so much for taking the time to leave us a 5-star rating – it's much appreciated!”</p>
                                <span><BsFillStarFill></BsFillStarFill></span>  <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span>
                            </div>

                        </div>

                    </div>
                    <div className="subReview">
                        <div className="singleReview-part1">

                        </div>
                        <div className="singleReview-part2-3">
                            <div className="singleReview">
                                <div className="client flex">
                                    <h2>Naymer Junior</h2>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvymza3hW-m0HzjGUU_Jiex_toJpkrUsDCA&usqp=CAU" alt="" />
                                </div>
                                <p>Thanks for sharing your rating with us and the community.“Thanks so much for taking the time to leave us a 5-star rating – it's much appreciated!”</p>
                                <span><BsFillStarFill></BsFillStarFill></span>  <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span> <span><BsFillStarFill></BsFillStarFill></span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Review;