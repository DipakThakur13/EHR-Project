import { Button, Container, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types";
import { ethers } from "ethers";

export default function Login() {
  const [role, setRole] = useState<UserRole>("PATIENT");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected. Please install MetaMask.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);

      alert("Wallet Connected!");
    } catch (error) {
      console.error(error);
      alert("Failed to connect wallet");
    }
  };

  const handleLogin = () => {
    if (!walletAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    login({
      id: walletAddress, // Use wallet as ID
      name: walletAddress,
      role,
      token: walletAddress, // Temporary until backend JWT added
    });

    navigate(role === "PATIENT" ? "/patient" : "/doctor");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h5" mb={2}>
        Blockchain Login
      </Typography>

      <Button
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={connectWallet}
      >
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : "Connect MetaMask"}
      </Button>

      <TextField
        select
        fullWidth
        label="Login as"
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        margin="normal"
      >
        <MenuItem value="PATIENT">Patient</MenuItem>
        <MenuItem value="DOCTOR">Doctor</MenuItem>
      </TextField>

      <Button fullWidth variant="contained" onClick={handleLogin}>
        Enter Dashboard
      </Button>
    </Container>
  );
}
