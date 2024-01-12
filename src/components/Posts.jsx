import React from 'react';
import './Posts.scss';
import { post } from './post';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BiRepost } from 'react-icons/bi';
import { BsFillSendFill } from 'react-icons/bs';
import { BsGlobeAmericas } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';

const Posts = () => {
    return (
        <div className='posts'>
            {
                post.map((post) => {
                    const { id, name, aid, refImg, ref, refDes,
                        prfile,
                        grade,
                        connetions,
                        tags,
                        img,
                        postion,
                        exp,
                        desc,
                        likedBy,
                        comments,
                        reposts } = post
                    return (
                        <>

                            <div className="post" key={id}>
                                <div className="post__top">
                                    <div className="left">
                                        <img src={refImg} alt="" />
                                        <h6>{ref}</h6>
                                        <span>{refDes}.</span>
                                    </div>
                                    <BsThreeDots size={25} />
                                </div>

                                {/* <br /> */}
                                <hr />
                                <br />


                                <div className="mid">
                                    <div className="head">
                                        <div className="desc">
                                        <img src={prfile} alt="" />
                                        <div>
                                            <div className="one">
                                                <h5>{name} . {grade}</h5>
                                            </div>
                                            <div className="two">
                                                <span>{postion}</span>

                                            </div>
                                            <div className="three">
                                                6d . <BsGlobeAmericas />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="plus">
                                            <AiOutlinePlus /> Follow
                                        </div>
                                    </div>


                                    <div className="tags">
                                        {
                                            tags.map((tag)=> (
                                                <h4>#{tag}</h4>
                                            ))
                                        }
                                    </div>

                                    <div className="desc">
                                        <p>{desc}</p>

                                        <br />
                                        <span>ThankYou.</span>
                                    </div>

                                    <div className="img">
                                        <img src={img} alt="" />
                                    </div>

                                    <div className="intract">
                                        <div className="left">
                                            <FcLike size={20} /> Liked by {ref} and {likedBy} others.
                                        </div>

                                        <div className="right">
                                            <p>{comments} comments</p>
                                            <p>{reposts} reposts</p>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                <br />

                                <div className="bottom">
                                    <div className="items">
                                        <div className="item">
                                            <AiOutlineLike />
                                            <span>Like</span>
                                        </div>
                                        <div className="item">
                                            <BiCommentDetail />
                                            <span>Comment</span>
                                        </div>
                                        <div className="item">
                                            <BiRepost />
                                            <span>Repost</span>
                                        </div>
                                        <div className="item">
                                            <BsFillSendFill />
                                            <span>Send</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </>
                    )
                })
            }
        </div>
    )
}

export default Posts