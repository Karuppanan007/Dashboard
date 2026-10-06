import React from 'react'
import SideBar from './SideBar'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import teamData from './cricket.json'
import { PieChart } from '@mui/x-charts/PieChart'
import { BarChart } from '@mui/x-charts/BarChart';

const App = () => {
  const team = teamData;

  const totalFours = team.reduce((total, item) => total + item.fours, 0)
  const totalSixes = team.reduce((total, item) => total + item.sixes, 0)
  const totalCatches = team.reduce((total, item) => total + item.catches, 0)

  return (
    <>
      <SideBar />
      <Box sx={{ backgroundColor: '#f5f6fa'}}>
        <Box sx={{ ml: { xs: 0, sm: 25 }, p: { xs: 2, sm: 3, md: 3 } }}>
          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#fff8dc', border: '1px solid #f1c40f' }}>
                <Typography fontWeight="bold">🏆 Winner Team</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>India</Typography>
                <Typography>8 Wins</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#eeeeee', border: '1px solid #999' }}>
                <Typography fontWeight="bold">🥈 Runner Up</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>South Africa</Typography>
                <Typography>8 Wins</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ p: 3, borderRadius: 2, backgroundColor: '#e3f2fd', border: '1px solid #2196f3' }}>
                <Typography fontWeight="bold">🏅 Player of the Tournament</Typography>
                <Typography variant="h5" fontWeight="bold" mt={1}>Jasprit Bumrah</Typography>
                <Typography>15 Wickets</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 2 }}>
              <BarChart
                xAxis={[{ data: ['India', 'South Africa', 'west Indies'] }]}
                series={[{ data: [8, 9, 7], label: 'Matches', color: 'blue' }, { data: [8, 8, 5], label: "Win", color: 'green' }, { data: [0, 1, 2], label: 'Loss', color: 'red' }]}
                height={300}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{mt: 2,display: 'flex',justifyContent: 'center',width:'100%'}}>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: totalFours, label: 'Fours' },
                      { id: 1, value: totalSixes, label: 'Sixes' },
                      { id: 2, value: totalCatches, label: 'Catches' }
                    ]
                  }
                ]}
                width={300}
                height={220}
              />
            </Grid>
          </Grid>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#1976d2' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Team</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Matches</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Fours</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Sixes</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Catches</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Wins</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Overall Runs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {team.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell><b>{item.team}</b></TableCell>
                    <TableCell>{item.matches}</TableCell>
                    <TableCell>{item.fours}</TableCell>
                    <TableCell>{item.sixes}</TableCell>
                    <TableCell>{item.catches}</TableCell>
                    <TableCell><b>{item.wins}</b></TableCell>
                    <TableCell><b>{item.overallRuns}</b></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}

export default App