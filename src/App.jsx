import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
const App = () => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/teams')
      .then((response) => response.json())
      .then((data) => setTeam(data))
  }, [])

  const totalRuns = team.reduce((total, item) => total + item.overallRuns, 0)
  const totalFours = team.reduce((total, item) => total + item.fours, 0)
  const totalSixes = team.reduce((total, item) => total + item.sixes, 0)
  const averageScore = team.length ? Math.round(totalRuns / team.length) : 0

  return (
    <Box sx={{ backgroundColor: '#f5f6fa' }}>
      <SideBar />

      <Box sx={{ ml: { xs: 0, sm: 25 }, p: { xs: 0, sm: 3, md: 5 } }}>
        <Grid container spacing={3} sx={{mb:3}}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#fff8dc', border: '1px solid #f1c40f' }}>
              <Typography fontWeight="bold">🥇 Winner Team</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>India</Typography>
              <Typography color="black">8 Wins</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#eeeeee', border: '1px solid #999' }}>
              <Typography fontWeight="bold">🥈 Runner Up</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>South Africa</Typography>
              <Typography color="text.secondary">8 Wins</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#e3f2fd', border: '1px solid #2196f3' }}>
              <Typography fontWeight="bold">⭐ Player of the Tournament</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1.5}>Jasprit Bumrah</Typography>
              <Typography color="black">15 Wickets</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#effaae', border: '1px solid #d0f112' }}>
              <Typography fontWeight="bold">⭐Average Score</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>{averageScore}</Typography>
              <Typography>Runs per Team</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#e8f5e9', border: '1px solid #4caf50' }}>
              <Typography fontWeight="bold">⭐Total Fours</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>{totalFours}</Typography>
              <Typography>All Teams</Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#ffebee', border: '1px solid #f44336' }}>
              <Typography fontWeight="bold">⭐Total Sixes</Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>{totalSixes}</Typography>
              <Typography>All Teams</Typography>
            </Box>
          </Grid>
        </Grid>

        <TableContainer>
        
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Team</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Matches</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Fours</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Sixes</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Wins</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Overall Runs</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {team.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>{item.id}</TableCell>
                  <TableCell><b>{item.team}</b></TableCell>
                  <TableCell>{item.matches}</TableCell>
                  <TableCell>{item.fours}</TableCell>
                  <TableCell>{item.sixes}</TableCell>
                  <TableCell><b>{item.wins}</b></TableCell>
                  <TableCell><b>{item.overallRuns}</b></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default App