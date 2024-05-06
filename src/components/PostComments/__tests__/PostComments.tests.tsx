import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from '@testing-library/react';

import PostComments from "..";

describe("Teste para o componente PostComents", () => {
    test("Deve adicionar dois comentarios corretamente", () => {
        render(<PostComments />);

        const commentTextarea = screen.getByRole("textbox");

        fireEvent.change(commentTextarea, {
            target: { value: "Primerio comentário" },
        });

        expect(commentTextarea).toHaveValue("Primeiro comentário");

        const submitButton = screen.getByRole("button", { name: /comentar/i });

        fireEvent.click(submitButton);

        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

        fireEvent.change(commentTextarea, {
            target: { value: "segundo comentário" },
        });

        expect(commentTextarea).toHaveValue("Segundo Comentario");

        fireEvent.click(submitButton);

        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();

        expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
    });
});