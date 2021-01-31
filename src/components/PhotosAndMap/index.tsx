import React from "react";
import styled from "@emotion/styled";
import { containerStyles } from "../../styles";
// TODO tell codegen not to suffix fragments with "Fragments"
// so that we can avoid this double fragme suffix
import { RestaurantFragmentFragment } from "../../generated/graphql";

export interface IProps {
  resto?: RestaurantFragmentFragment | null;
}

export default function PhotosAndMap(props: IProps): JSX.Element {
  const { resto } = props;

  const photos = resto?.photos || [];

  return (
    <Container>
      <Grid>
        {photos.map((url, index) => (
          <Img key={index} src={url || ""} />
        ))}
      </Grid>
      <p>{resto?.location?.formatted_address}</p>
    </Container>
  );
}

export const Container = styled.div`
  ${containerStyles}
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
  border-top: 1px solid ${({ theme }) => theme.colors.grey100};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  justify-items: left;
`;

export const Img = styled.img`
  max-width: 300px;
  height: 228px;
`;

export const Address = styled.p`
  font-size: 1px solid ${({ theme }) => theme.fontSize.x800};
`;
