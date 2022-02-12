import React from "react";
import { InputSectionLabel } from "../../atoms";
import { Input, Modal } from "../../molecules";
import { FilterContainer, InputRowItem, InputsRowContainer } from './styles';

export const FilterModal = ({ onClose, visible }) => {
    return (
        <Modal visible={visible} onClose={onClose} title="Filtrar">
            <FilterContainer>
                <InputSectionLabel mt={12} mb={6}>
                    Tamanho
                </InputSectionLabel>
                <InputsRowContainer>
                    <InputRowItem>
                        <Input label="Mínimo" placeholder="Ex: 77" />
                    </InputRowItem>
                    <InputRowItem>
                        <Input label="Máximo" placeholder="Ex: 200" />
                    </InputRowItem>
                </InputsRowContainer>

                <InputSectionLabel mt={12} mb={6}>
                    Preço
                </InputSectionLabel>
                <InputsRowContainer>
                    <InputRowItem>
                        <Input label="Mínimo" placeholder="Ex: 500" />
                    </InputRowItem>
                    <InputRowItem>
                        <Input label="Máximo" placeholder="Ex: 2000" />
                    </InputRowItem>
                </InputsRowContainer>

                <InputSectionLabel mt={12} mb={6}>
                    Quartos
                </InputSectionLabel>
                <InputsRowContainer>
                    <InputRowItem>
                        <Input label="Mínimo" placeholder="Ex: 2" />
                    </InputRowItem>
                </InputsRowContainer>

                <InputSectionLabel mt={12} mb={6}>
                    Banheiros
                </InputSectionLabel>
                <InputsRowContainer>
                    <InputRowItem>
                        <Input label="Mínimo" placeholder="Ex: 1" />
                    </InputRowItem>
                </InputsRowContainer>
            </FilterContainer>
        </Modal>
    );
};