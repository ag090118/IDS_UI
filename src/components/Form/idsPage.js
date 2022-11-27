import Split from 'react-split'
import Form from './form'
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function IdsPage() {
  function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  const itemData=[
    {
      img:"http://localhost:3001/63836ab04f062ca5eacf4b19-1669559619532_test_conf_mat.png",
      title:"Testing Confusion Matrix"
    },
    {
      img:"http://localhost:3001/63836ab04f062ca5eacf4b19-1669559619532_test_clf_rep.png",
      title:"Testing Classification Report"
    },
    {
      img:"http://localhost:3001/63836ab04f062ca5eacf4b19-1669559619532_training_conf_mat.png",
      title:"Training Confusion Matrix"
    },
    {
      img:"http://localhost:3001/63836ab04f062ca5eacf4b19-1669559619532_training_clf_rep.png",
      title:"Training Classification Report"
    },
  ];
return (
<div className="App">
<Split
        className='flex'
        sizes={[50, 50]}
        style={{height:"100%",width:"100%",display:"flex",margin:"auto"}}
        minSize={500}
      >
        <div style={{height:"100%",width:"100%",overflow:"auto"}}>
          
          <Form/>
        </div>
        <Split
          direction='vertical'
          sizes={[70, 30]}
          style={{width:"100%",height:"100%",margin:"auto"}}
        >
          <div className="topright">
          <ImageList>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                // subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
    </ImageList>
          </div>

          <div className="bottomright">

          <Box component="span" sx={{ display: 'block' }}>
          <Box
              component="div"
              sx={{
                display: 'inline',
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: '900',
              }}
          >Training Accuracy   : </Box>
          <Box component="div" sx={{ display: 'inline',verticalAlign: '-50%' }}><CircularProgressWithLabel value={80} /></Box>
          </Box>

          <Box component="span" sx={{ display: 'block' }}>
          <Box
              component="div"
              sx={{
                display: 'inline',
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '1rem',
                fontWeight: '900',
              }}
          >Testing Accuracy   : </Box>
          <Box component="div" sx={{ display: 'inline',verticalAlign: '-50%' }}><CircularProgressWithLabel value={80} /></Box>
          </Box>
          
          </div>
        </Split>
</Split>
</div>
)
}