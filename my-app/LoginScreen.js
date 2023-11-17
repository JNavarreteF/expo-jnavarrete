import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica para iniciar sesión
    };

    const handleForgotPassword = () => {
        // Lógica para enviar el enlace de recuperación de contraseña
    };

    return (
        <View>
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Iniciar sesión" onPress={handleLogin} />
            <Text onPress={handleForgotPassword}>¿Olvidaste tu contraseña?</Text>
        </View>
    );
};

export default LoginScreen;
