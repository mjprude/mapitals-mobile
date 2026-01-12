import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-secondary-purple-dark">
      <LinearGradient
        colors={[COLORS.secondary.purpleDark, COLORS.primary.purple]}
        className="flex-1"
      >
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text-4xl font-bold text-white mb-4">
            Mapitals
          </Text>
          <Text className="text-lg text-white/80 text-center mb-8">
            Guess the capital cities through Hangman-style letter guessing
          </Text>

          <Pressable
            className="bg-primary px-8 py-4 rounded-xl active:opacity-80"
          >
            <Text className="text-white font-semibold text-lg">
              Start Game
            </Text>
          </Pressable>

          <View className="mt-8 flex-row gap-4">
            <View className="bg-game-correct/20 px-4 py-2 rounded-lg">
              <Text className="text-game-correct font-medium">Correct</Text>
            </View>
            <View className="bg-game-incorrect/20 px-4 py-2 rounded-lg">
              <Text className="text-game-incorrect font-medium">Incorrect</Text>
            </View>
            <View className="bg-game-score/20 px-4 py-2 rounded-lg">
              <Text className="text-game-score font-medium">Score</Text>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-accent-cyan text-center">
              NativeWind styling is working!
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
