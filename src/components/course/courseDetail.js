import React, { Component } from "react";
import axios from "axios";

export default class courseDetail extends Component {
  componentDidMount() {
    // axios.get()
  }

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
      </div>
    );
  }
}
