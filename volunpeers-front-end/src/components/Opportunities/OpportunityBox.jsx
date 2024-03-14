import React, { useState, useEffect } from "react";
import "./OpportunityStyling.css";
import CityImage from "../../Images/citywithpark.webp";
import { useParams } from "react-router-dom"; // Assuming you're using React Router

const OpportunityBox = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [company, setCompany] = useState(null);
  const [summary, setSummary] = useState("");
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Fetch company data based on companyId
    fetchCompanyData();
  }, [id]);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch("/api/companies", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched company data:", data);

        setCompanyData(data);
        setLoading(false);
      } else {
        console.error("Failed to fetch company data", response.status);
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Add loading state
  }

  return (
    <div className="Opportunities">
      {companyData.slice(0, 3).map((company) => (
        <>
          <div key={company._id} className="volunteeringOpportunity">
            <div className="OpportunityTitle">
              <h3>Title: {company.job}</h3>
              <div className="TextSectionHeader">
              <h4 className="Theme">Theme: {company.summary} </h4>
              <span className="Location">Location: {company.location}</span>
              </div>
              <img src={CityImage} alt="" />
            </div>
            <span className="Date">
              Date: {new Date().getDate()} / {new Date().getMonth() + 1} /{" "}
              {new Date().getUTCFullYear()}
            </span>
            <div className="TextSection">
              <h4>Company {company.company}</h4>
              <p>
                Ever wanted to clean the Area? Join us now! <br></br>Embark on a
                transformative journey to revitalize our city!<br></br> Join
                hands in a community effort, and together, let's sweep away the
                chaos, one clean street at a time. Your actions today shape a
                cleaner, brighter future for all. #CleanCityRevolution
              </p>
            </div>
            <button className="ReadMoreButton" aria-label="Read more">
              Read more
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default OpportunityBox;
