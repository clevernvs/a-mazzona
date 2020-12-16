import React from 'react';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import { Grid } from '@material-ui/core';

export default function Rating(props) {

  const { rating, numReviews } = props;

  return (
    <div>
      <Grid container>
        <Grid item>
          <span>
            {
              rating >= 1 ? (<Star style={{ color: amber[500] }} fontSize="small" />)
                : rating >= 0.5 ? (<StarHalf style={{ color: amber[500] }} fontSize="small" />)
                  : (<StarBorder color="disabled" fontSize="small" />)
            }
          </span>
        </Grid>

        <Grid item>
          <span>{numReviews + 'reviews'}</span>
        </Grid>
      </Grid>
    </div>
  )
}
