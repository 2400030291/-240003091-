import React, { useState, useEffect } from "react";
import "./ResponsiveStudentInfo.css";

export default function ResponsiveStudentInfo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const student = {
    name: "Rahul Sharma",
    course: "B.Tech Computer Science",
    college: "Tech Valley University",
    email: "rahul@example.com",
  };

  return (
    <div className={`student-container ${isMobile ? "vertical" : "horizontal"}`}>
      <div className="student-info">
        <h2>{student.name}</h2>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>College:</strong> {student.college}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
}
