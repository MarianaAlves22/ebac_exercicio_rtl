import { render, screen } from '@testing-library/react';
import Post from '..';

describe("Teste para o Post", () => {
    test("Deve renderizar corretamente", () => {
        render(<Post imageUrl='https://via.placeholder.com/250x250'>Teste</Post>);

        expect(screen.getByText("Teste")).toBeInTheDocument();

        const postImage = screen.getByAltText("Post");
        expect(postImage).toBeInTheDocument();
        expect(postImage).toHaveAttribute(
            "src",
            "https://via.placeholder.com/250x250"
        );

        expect(screen.getByTestId("post-comments")).toBeInTheDocument();
    });
});