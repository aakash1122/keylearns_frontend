import React, { Component } from "react";
import CourseCard from "./CourseCard";

export default class courseDetail extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="text-dark courseDetail">
        <div className="row mt-5" id="course-header-container">
          <div className="col-sm-7" id="course-header">
            <h3>The Complete React Native and Redux Course</h3>
            <p>
              আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র^ নামক এক
              যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে। এর পর একে একে
              বাংলা উইকিপিডিয়া, ওয়ার্ডপ্রেস বাংলা কোডেক্সসহ বিভিন্ন বাংলা অনলাইন
              পত্রিকা তৈরির কাজ করতে করতে বাংলার সাথে নিজেকে বেঁধে নিয়েছি
              আষ্টেপৃষ্ঠে।
            </p>
            <p className="creator">Anwar Aakash</p>
            <p className="total-enrolled">15702 students enrolled</p>
            <p>Last updated: 10/3/19</p>
            <div className="rate">
              <span class="fa fa-star checked" />
              <span class="fa fa-star checked" />
              <span class="fa fa-star checked" />
              <span class="fa fa-star checked" />
              <span class="fa fa-star" />
            </div>
            <button className="btn btn-lg mt-2">Enroll Now</button>
          </div>
          <div className="col-sm-5" />
        </div>
        <div className="row" id="course-content-section">
          <div className="col-md-6">
            <div className="course-files" id="scrollable">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                dicta.
              </h3>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <h3>Lorem ipsum dolor sit.</h3>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                dicta.
              </h3>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <h3>Lorem ipsum dolor sit.</h3>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="video-player" />
          </div>
        </div>
        <div className="suggestion bg-dark text-light">
          <h3>Similar Courses</h3>
          <div className="suggested-courses d-flex flex-md-row justify-content-center flex-wrap mt-5 p-3">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    );
  }
}
