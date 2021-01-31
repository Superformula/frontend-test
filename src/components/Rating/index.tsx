import styled from "@emotion/styled";
import Star from "./Star";

export interface IProps {
  score: number;
}

// TODO make it scalable in size
export default function Rating(props: IProps) {
  // ensure score is between 0 and 100
  const score = Math.max(0, Math.min(100, props.score));
  const starCount = 5;
  const maxStarScore = 100 / starCount;
  const fullStarCount = Math.floor(score / maxStarScore);
  const scoreModulus = score % maxStarScore;
  const partialStarFullness = (scoreModulus / maxStarScore) * 100;

  return (
    <Wrapper>
      {[...Array(5).keys()].map((index) => {
        let fullness = 0;
        if (index < fullStarCount) {
          fullness = 100;
        }

        if (index === fullStarCount) {
          fullness = partialStarFullness;
        }

        return <Star key={index} fullness={fullness} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > * {
    padding-right: 2px;
  }
`;
