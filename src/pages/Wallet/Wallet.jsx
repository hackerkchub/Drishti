import React from "react";
import { PageContainer, PageTitle, PageDesc, CardGrid, Card } from "../PageStyles";

const Wallet = () => {
  return (
    <PageContainer>
      <PageTitle>Wallet</PageTitle>
      <PageDesc>Manage your Drishti coins and transactions.</PageDesc>

      <CardGrid>
        <Card>
          <h3>Current Balance</h3>
          <p style={{ fontSize: "1.4rem", color: "#ffd700" }}>₹ 450</p>
        </Card>
        <Card>
          <h3>Recent Transaction</h3>
          <p>Recharged ₹200 - Oct 25, 2025</p>
        </Card>
        <Card>
          <h3>Offer</h3>
          <p>Get 10% extra on ₹500+ recharge 🎁</p>
        </Card>
      </CardGrid>
    </PageContainer>
  );
};

export default Wallet;
