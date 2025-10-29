import React from "react";
import { PageContainer, PageTitle, PageDesc, CardGrid, Card } from "../PageStyles";

const Profile = () => {
  return (
    <PageContainer>
      <PageTitle>User Profile</PageTitle>
      <PageDesc>View and edit your personal information.</PageDesc>

      <CardGrid>
        <Card>
          <h3>Name</h3>
          <p>Kapil Chilhate</p>
        </Card>
        <Card>
          <h3>Email</h3>
          <p>kapil@drishti.com</p>
        </Card>
        <Card>
          <h3>Membership</h3>
          <p>Gold Tier</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Profile;
