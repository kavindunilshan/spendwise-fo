import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {InputAdornment} from "@mui/material";
import {fetchCategoryByType} from "../../services/axios-services.js";

const transactionTypes = [
    {
        value: 'INCOME',
        label: 'Income',
    },
    {
        value: 'EXPENSE',
        label: 'Expense',
    },
    {
        value: 'SAVING',
        label: 'Saving',
    },
];

export default function SelectTextFields({ formData, handleFormChange, errors, currency }) {
    const [categories, setCategories] = React.useState([]);

    useEffect(() => {
        if (formData.transactionType) {
            fetchCategoryByType(formData.transactionType).then(fetchedCategories => {
                setCategories(fetchedCategories);
            }).catch(error => {
                console.error("Error fetching categories: ", error);
            });
        }
    }, [formData.transactionType]);


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-transaction-type"
                    select
                    label="Transaction Type"
                    name="transactionType"
                    value={formData.transactionType}
                    onChange={handleFormChange}
                    helperText="Please select transaction type"
                >
                    {transactionTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-amount"
                    label="Amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleFormChange}
                    helperText={errors.amount ? errors.amount : "Please enter the amount"}
                    error={Boolean(errors.amount)}
                    required
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                    }}
                    placeholder="0.00"
                />
            </div>
            <div>
                <TextField
                    id="outlined-date"
                    label="Date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    helperText="Please select the date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-select-category"
                    select
                    label="Category"
                    name="category"
                    value={formData.category === "" ? "":`${formData.categoryId}-${formData.category}`}
                    onChange={handleFormChange}
                    helperText="Please select Category"
                    sx={{ marginLeft : 2 }}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.categoryId} value={`${option.categoryId}-${option.name}`}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <TextField
                    id="outlined-description"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    multiline
                    rows={4}
                    helperText="Please enter a description"
                    sx={{ width: '57ch' }}
                />
            </div>
        </Box>
    );
}
